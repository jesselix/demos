const { Menu } = require("electron");

var menuTemplate = [
    {
        label: "文件"
    },
    {
        label: "编辑"
    }
];

var menuBuilder = Menu.buildFromTemplate(menuTemplate);

Menu.setApplicationMenu(menuBuilder)