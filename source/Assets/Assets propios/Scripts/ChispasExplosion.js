#pragma strict
var chispas : GameObject;
public var activar : String = "p";
private var tiempo : boolean = false;
private var conta : float = 0.0f;

function Start () {
		chispas.active = false;
}

function Update () {
	if(Input.GetKeyUp("p"))
	{
		chispas.active = true;
		tiempo = true;
		conta = 0.0f;
	}
	else{
		if(tiempo)
		{
			conta += 0.02f;
			if(conta > 2.0f)
			{
				chispas.active = false;
				tiempo = false;
			}
		}
	}
}