import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  // Register the command
  let disposable = vscode.commands.registerCommand(
    "extension.runPythonFile",
    (uri: vscode.Uri) => {
      let currentFile: string;

      // If the command was triggered from the context menu in the Explorer, use the provided URI
      if (uri && uri.fsPath) {
        currentFile = uri.fsPath;
      } else {
        // Otherwise, use the active text editor
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
          vscode.window.showErrorMessage("No active text editor found.");
          return;
        }
        currentFile = editor.document.fileName;
      }

      // Check if the file is a Python file
      if (!currentFile.endsWith(".py")) {
        vscode.window.showErrorMessage(
          "The selected file is not a Python file."
        );
        return;
      }

      // Execute the Python file
      const terminal = vscode.window.createTerminal("Python Runner");
      terminal.show();
      terminal.sendText(`python "${currentFile}"`);
    }
  );

  context.subscriptions.push(disposable);

  // Add a button to the status bar
  const statusBarButton = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );
  statusBarButton.command = "extension.runPythonFile";
  statusBarButton.text = "$(play) Run Python Script";
  statusBarButton.tooltip = "Run the active Python file";
  statusBarButton.show();

  context.subscriptions.push(statusBarButton);

  // Context menu for Explorer
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "extension.runPythonFileExplorer",
      (uri: vscode.Uri) => {
        vscode.commands.executeCommand("extension.runPythonFile", uri);
      }
    )
  );

  // Context menu for editor
  let disposableContextMenu = vscode.commands.registerCommand(
    "extension.runPythonFileEditor",
    () => {
      vscode.commands.executeCommand("extension.runPythonFile");
    }
  );
  context.subscriptions.push(disposableContextMenu);
}

export function deactivate() {}
