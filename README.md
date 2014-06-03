## Polymer / RequireJS boilerplate

`npm install && grunt && grunt connect` should get you going. (And `npm install -g grunt-cli` if you haven't already.)

OR

`npm install && ./node_modules/.bin/bower install && grunt recess && grunt connect`

Also bundled: 

- Semantic UI
- Underscore
- Schema inspector
- jQuery

To remove , remove the bower.json dependency, remove the concerned public/js/bower_components/ directories, and update
the RequireJS config.js file (shim & paths). 
 

### Credits

Idea based on: https://gist.github.com/tantaman/7222599 and http://jsbin.com/efojap/2/edit