#pragma strict

var distanciaDeHuida : float = 5;
var cobarde : GameObject;

@System.NonSerialized
var punto : Vector3;

@System.NonSerialized
var dist :  float;

@System.NonSerialized
var x : 	float;

@System.NonSerialized
var y : 	float;

@System.NonSerialized
var z : 	float ;

function Start(){
x = transform.position.x;
y = transform.position.y;
z = transform.position.z;
}

function Update () {
	dist = Vector3.Distance(transform.position,cobarde.transform.position);
	Debug.Log(transform.position);
	if ( dist < distanciaDeHuida ){
		x = 2*x - cobarde.transform.position.x;
		y = 2*y - cobarde.transform.position.y;
		z = 2*z - cobarde.transform.position.z;

		transform.position = Vector3(x,y,z);
	}
	
}