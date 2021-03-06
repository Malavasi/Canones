﻿#pragma strict

var puntoX : float = 0;
var puntoY : float = 0;
var puntoZ : float = 0;

@System.NonSerialized
var punto : Vector3;

@System.NonSerialized
var dist :  float;

function Start(){
	punto = new Vector3(puntoX, puntoY, puntoZ);
}

function Update () {
	dist = Vector3.Distance(transform.position,punto);
	Debug.Log(dist);
}