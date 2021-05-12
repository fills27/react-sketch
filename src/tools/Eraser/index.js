import FabricCanvasTool from "../fabrictool";

class Eraser extends FabricCanvasTool {
  configureCanvas(props) {
    this._canvas.freeDrawingBrush = new fabric.EraserBrush(this._canvas);
    this._canvas.isDrawingMode = true;
    this._canvas.freeDrawingBrush.width = props.lineWidth;
  }
}

export default Eraser;
