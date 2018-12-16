let fs = require('fs');
let cp = require('child_process');
let cs = require('combined-stream');

let mysql = cp.spawn('mysql', ['-u', 'root'], { stdio: ['pipe', 1, 2] });

cs.create()
  .append(fs.createReadStream('./schema.sql', 'utf8'))
  .append(fs.createReadStream('./seeds.sql', 'utf8'))
  .pipe(mysql.stdin);