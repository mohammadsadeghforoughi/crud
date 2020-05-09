const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

function DO() {
  this.initContent = `[]`;
  this.DataObject = null;


  this.getDO = () => {
    let tempDo = fs.readFileSync(this.DOpath, "utf8");
    this.DataObject = JSON.parse(tempDo);
  };

  this.init = ({path}) => {
    this.DOpath = path;
    if (!fs.existsSync(this.DOpath)) {
      var createStream = fs.createWriteStream(this.DOpath);
      createStream.end();
      fs.writeFile(this.DOpath, this.initContent, (err) => {
        if (err) throw err;
        console.log("The DO was succesfully created!");
        this.getDO();
      });
    } else {
      this.getDO();
    }
  };

  this.read = () => {
    return this.DataObject;
  };

  this.insert = (obj) => {
    let tempDO = this.DataObject;
    !obj.id && (obj.id = uuidv4());
    tempDO.push(obj);
    fs.writeFileSync(this.DOpath, JSON.stringify(tempDO));
    this.getDO();
  };

  this.remove = (id) => {
    let tempDO = this.DataObject;
    tempDO = tempDO.filter((i) => i.id != id);
    fs.writeFileSync(this.DOpath, JSON.stringify(tempDO));
    this.getDO()
  };

  this.update = (id, obj) => {
    this.remove(id);
    this.insert(obj);
  };
}

module.exports = DO;
