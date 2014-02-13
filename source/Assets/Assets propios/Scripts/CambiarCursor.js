#pragma strict
var cursorTexture : Texture2D;
var cursorMode : CursorMode = CursorMode.Auto;
var hotSpot : Vector2 = Vector2.zero;

function OnMouseOver () {
	Cursor.SetCursor(cursorTexture, hotSpot, cursorMode);
}

