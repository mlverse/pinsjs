/*
 * Provides default callbacks for Node.js
 */

var fs = require('fs');
var fsUrl = require('url');
var fsPath = require('path');
var fetch = require('node-fetch');
var which = require('which');
var exec = require('child_process');
var crypto = require('crypto-js');
var tar = require('tar');
var md5 = require('../src/utils/md5');

var dirName = function(path) {
  const basename = fsPath.join(__dirname, '..');

  if (path.startsWith(basename)) {
    return path;
  }
  return fsPath.join(basename, path);
}

var init = function(pins) {
  require('dotenv').config();

  pins.callbacks.set("dirCreate", function(path, options = {}) {
    fs.mkdirSync(dirName(path), options);
  });

  pins.callbacks.set("dirExists", function(path) {
    const paths = path.split('/');
    const result = paths.reduce((res, _, index) => {
      const exist = fs.existsSync(dirName(paths.slice(0, index + 1).join('/')));
      return res && exist;
    }, true);

    return result && fs.statSync(dirName(path)).isDirectory();
  });

  pins.callbacks.set("dirList", function(path, recursive = false, fullNames = false) {
    const walkSync = (dir, list) => {
      const files = fs.readdirSync(dir);

      list = list || [];
      files.forEach(file => {
        const fullFile = fsPath.join(dir, file);

        if (fs.statSync(fullFile).isDirectory()) {
          list = walkSync(fsPath.join(dir, file), list);
        } else {
          list.push(fullNames ? fullFile : file);
        }
      });

      return list;
    };
    const fullPath = dirName(path);
    const result = recursive
      ? walkSync(fullPath)
      : fs.readdirSync(fullPath).map(f => fsPath.join(fullPath, f));

    return result;
  });

  pins.callbacks.set("dirRemove", function(path, options = {}) {
    const deleteRecursive = name => {
      fs.readdirSync(name).forEach(file => {
        const currPath = fsPath.join(name, file);

        if (fs.lstatSync(currPath).isDirectory()) {
          deleteRecursive(currPath);
        } else {
          fs.unlinkSync(currPath);
        }
      });
      fs.rmdirSync(name);
    };
    const dir = dirName(path);

    if (fs.statSync(dir).isFile()) {
      fs.unlinkSync(dir);
    } else {
      deleteRecursive(dir);
    }
  });

  pins.callbacks.set("dirZip", async function(path, name) {
    await tar.c({
      gzip: true,
      file: name,
    },[dirName(path)]);
  });

  pins.callbacks.set("tempfile", function() {
    return "/temp/" + (Math.floor(Math.random() * 1000000000)).toString();
  });

  pins.callbacks.set("readLines", function(path) {
    return fs.readFileSync(dirName(path), 'utf8').split("\n");
  });

  pins.callbacks.set("writeLines", function(path, content) {
    const dir = fsPath.dirname(path);

    fs.mkdirSync(dirName(dir), { recursive: true });
    fs.writeFileSync(dirName(path), content.join("\n"));
  });

  pins.callbacks.set("basename", function(path) {
    const parsed = new RegExp('^https?://').test(path)
      ? fsUrl.parse(path).pathname
      : dirName(path);

    return fsPath.basename(parsed);
  });

  pins.callbacks.set("boardRegisterCode", function() {
    return null;
  });

  pins.callbacks.set("uiViewerRegister", function() {
    return null;
  });

  pins.callbacks.set("uiViewerClose", function() {
    return null;
  });

  pins.callbacks.set("userCacheDir", function(name) {
    const platform = process.platform;

    if (platform === "darwin" || platform === "linux") {
      return "~/.cache/" + name;
    } else if (platform === "win32") {
      return "~/AppData/local/" + name;
    } else {
      return "pins/";
    }
  });

  pins.callbacks.set("pinLog", function(message) {
    console.log(message);
  });

  pins.options = {};
  pins.callbacks.set("getOption", function(option) {
    return pins.options[option];
  });

  pins.callbacks.set("fileWrite", function(content, path) {
    path = dirName(path);
    fs.writeFileSync(path, content);
  });

  pins.callbacks.set("fileRead", function(path) {
    return fs.readFileSync(dirName(path), 'utf8');
  });

  pins.callbacks.set("filePath", function(path1, path2) {
    if (new RegExp('^https?://').test(path1)) {
      if (path1[path1.length - 1] === '/') path1 = path1.slice(0, -1);
      return `${path1}/${path2}`;
    }
    return fsPath.join(path1, path2);
  });

  pins.callbacks.set("fileRemove", function(path) {
    fs.unlinkSync(dirName(path));
  });

  pins.callbacks.set("fileExists", function(path) {
    const paths = path.split('/');
    const result = paths.reduce((res, element, index) => {
      const exist = fs.existsSync(dirName(paths.slice(0, index + 1).join('/')));
      return res && exist;
    }, true);

    return result && fs.statSync(dirName(path)).isFile();
  });

  pins.callbacks.set("fileCopy", function(from, to, recursive) {
    to = dirName(to);

    if (!fs.existsSync(to)) {
      fs.mkdirSync(to);
    }

    const deepCopy = (source, target) => {
      fs.readdirSync(source).forEach(src => {
        const fullSrc = fsPath.join(source, src);
        const fullTrg = target.includes(src) ? target : fsPath.join(target, src);

        if (fs.statSync(fullSrc).isFile()) {
          fs.copyFileSync(fullSrc, fullTrg);
        } else if (recursive) {
          if (!fs.existsSync(fullTrg)) {
            fs.mkdirSync(fullTrg);
          }
          deepCopy(fullSrc, fullTrg);
        }
      });
    }

    if (typeof from === 'string') {
      from = dirName(from);
      if (fs.statSync(from).isFile()) {
        fs.copyFileSync(from, fsPath.join(to, fsPath.basename(from)));
      } else {
        deepCopy(from, to);
      }
    } else {
      from.forEach(f => {
        const fullF = dirName(f);

        if (fs.statSync(fullF).isFile()) {
          fs.copyFileSync(fullF, fsPath.join(to, fsPath.basename(f)));
        } else {
          const target = to.includes(f) ? to : fsPath.join(to, fsPath.basename(f));

          if (!fs.existsSync(target)) {
            fs.mkdirSync(target, { recursive: true });
          }
          deepCopy(fullF, target);
        }
      });
    }
  });

  pins.callbacks.set("createLink", function(from, to) {
    fs.linkSync(dirName(from), dirName(to));
  });

  pins.callbacks.set("fileSize", function(path) {
    return fs.statSync(dirName(path)).size;
  });

  pins.callbacks.set("sha1", function(content, key) {
    const hash = crypto.HmacSHA1(content, key);
    return hash.toString(crypto.enc.Base64);
  });

  pins.callbacks.set("md5", (str, key) => { return md5 ? md5(str, key) : '' });

  pins.callbacks.set("fetch", fetch);

  pins.callbacks.set("env", name => process.env[name]);

  pins.callbacks.set("process", name => process);

  pins.callbacks.set("which", which);

  pins.callbacks.set("exec", exec);

  pins.callbacks.set("getFunction", () => {});

  return pins;
};

exports.init = init;
