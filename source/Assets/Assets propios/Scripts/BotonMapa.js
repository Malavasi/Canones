#pragma strict

public var escenario : String; 

function OnMouseDown()
{
	Application.LoadLevel(escenario);
}

function OnMouseOver()
{
	if(transform.localScale.x < 0.12)
	{
		transform.localScale.x += 0.002;
   		transform.localScale.y += 0.002;
   	}
}

function OnMouseExit()
{
	transform.localScale.x = 0.1;
    transform.localScale.y = 0.1;
}