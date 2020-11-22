const { Bounds } = require("../bounds");

class InkWellWidget {
    constructor(xdNode) {
        this.xdNode = xdNode;
        this.bounds = new Bounds(xdNode);
    }

    toDart(childWidget) {
        const { itemsToDart } = require("../items_to_dart");
        const child = !childWidget ? itemsToDart(this.xdNode.children) : childWidget;
        let withInkWell = document.querySelector('input[name="prototypeInteractions"]');
        withInkWell = withInkWell != null ? withInkWell.checked : null;
        if (!withInkWell) return child;
        let withStyledWidget = document.querySelector('input[name="simpleType"]');
        withStyledWidget = withStyledWidget != null ? withStyledWidget.checked : null;
        if (withStyledWidget) {
            return `${child}.onTap((){
                //TODO: onTap ${this.xdNode.name}
                print('onTap ${this.xdNode.name}');
            })`
        }
        return `
        InkWell(
            onTap: (){
                //TODO: onTap ${this.xdNode.name}
                print('onTap ${this.xdNode.name}');
            },
            child: ${child},
        )`;
    }
}

exports.InkWellWidget = InkWellWidget;