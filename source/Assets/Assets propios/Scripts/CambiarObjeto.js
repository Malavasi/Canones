#pragma strict

private var esCatapulta : boolean = true;
public var teclaCambio : String = "q";
public var posRel : Vector3 = new Vector3(-2.4f, 0f, -1.51f);
private var objeto : GameObject = null;

function Start () {
	GameObject.Destroy(objeto);
	objeto = GameObject.Instantiate(Resources.Load ("Catapulta usable"), transform.position, transform.rotation);
	esCatapulta = true;
	objeto.transform.parent = transform;
}

function Update () {
	if (Input.GetKeyDown(teclaCambio))
	{
		if(esCatapulta)
		{
			GameObject.Destroy(objeto);
			objeto = GameObject.Instantiate(Resources.Load ("Cañon usable"), transform.position, transform.rotation);
			esCatapulta = false;
			objeto.transform.parent = transform;
			objeto.transform.localPosition += posRel;
		}
		else
		{
			GameObject.Destroy(objeto);
			objeto = GameObject.Instantiate(Resources.Load ("Catapulta usable"), transform.position, transform.rotation);
			esCatapulta = true;
			objeto.transform.parent = transform;
		}
		
		
	}
}