#pragma strict

public var mostrado : boolean = false;

function Start () {
	GameObject.Find("Controles").guiText.enabled = false;
	GameObject.Find("Arma").guiText.enabled = false;
	GameObject.Find("Disparar").guiText.enabled = false;
	GameObject.Find("Girar").guiText.enabled = false;
	GameObject.Find("Movimiento").guiText.enabled = false;
	GameObject.Find("Recargar").guiText.enabled = false;
	
}

function Update () {
	if (Input.GetKeyDown(KeyCode.F1))
	{
		if(mostrado)
		{
			mostrado = false;	
		}
		else
		{
			mostrado = true;
		}
		GameObject.Find("Controles").guiText.enabled = mostrado;
		GameObject.Find("Arma").guiText.enabled = mostrado;
		GameObject.Find("Disparar").guiText.enabled = mostrado;
		GameObject.Find("Girar").guiText.enabled = mostrado;
		GameObject.Find("Movimiento").guiText.enabled = mostrado;
		GameObject.Find("Recargar").guiText.enabled = mostrado;
	}
}