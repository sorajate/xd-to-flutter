const { cleanVarName } = require("./util/widgets_util");

class StatelessWidget {
  constructor(name, child) {
    this.name = name;
    this.child = child;
  }

  toDart() {
    this.name = widgetPrefix() + cleanVarName(this.name, true);
    return `
        class ${this.name} extends StatelessWidget {
          const ${this.name}({Key key}) : super(key: key);    
          
          @override
          Widget build(BuildContext context) {
            return ${this.child}
          }
        }`;
  }
}

exports.StatelessWidget = StatelessWidget;

function widgetPrefix() {
  const element = document.getElementById('widgetsPrexix');
  const prefix = element != null ? element.value : element;
  if (!prefix) return '';
  return prefix;
}