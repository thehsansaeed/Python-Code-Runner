# Run Python File Extension

This Visual Studio Code extension allows you to easily run Python scripts directly from the editor or the file explorer.

## Features

- Run the active Python file from the editor.
- Run a Python file from the context menu in the file explorer.
- Adds a convenient button to the status bar to run the active Python file.

## Installation

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing `Ctrl+Shift+X`.
3. Search for `Run Python File` and click Install.

## Usage

### From the Editor

1. Open a Python file in the editor.
2. Click on the `$(play)` button in the status bar to run the active Python file.
3. Alternatively, you can right-click in the editor and select `Run Python File` from the context menu.

### From the File Explorer

1. Right-click on a Python file in the file explorer.
2. Select `Run Python File` from the context menu.

### Commands

-`extension.runPythonFile`: Runs the active Python file or the selected Python file from the file explorer.

## Development

If you want to contribute or modify this extension, follow these steps:

1. Clone the repository.
2. Open the repository folder in Visual Studio Code.
3. Run `npm install` to install the necessary dependencies.
4. Press `F5` to open a new VS Code window with the extension loaded.

### Adding a Command

To add a new command, follow these steps:

1. Open `src/extension.ts`.
2. Register your command using `vscode.commands.registerCommand`.
3. Implement the functionality for your command.

### Publishing the Extension

To publish the extension to the Visual Studio Code Marketplace:

1. Install `vsce` if you haven't already: `npm install -g vsce`.
2. Run `vsce package` to create a `.vsix` file.
3. Run `vsce publish` to publish the extension (you will need a Personal Access Token from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/manage)).

## Release Notes

### 1.0.0

- Initial release of the Run Python File extension.

## License

[MIT License](https://github.com/thehsansaeed/Python-Code-Runner/blob/main/LICENSE "Ahsan Saeed").

## Support

If you have any issues or feature requests, please open an issue on the [GitHub repository](https://github.com/thehsansaeed/Python-Code-Runner/issues "Ahsan Saeed").

## Developer Details

-**Ahsan Saeed** - [GitHub Profile](https://github.com/thehsansaeed/)

-**Email** - [muhammadahsen83@gmail.com](muhammadahsen83@gmail.com)
