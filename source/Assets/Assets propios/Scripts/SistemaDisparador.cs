// Autor: GhaleonKoizumi (Heiner Alberto Aguilar Zuñiga)

using UnityEngine;
using System.Collections;

//Este script es una clase que representa un sistema disparador de algun tipo de proyectil
//Simula tanto el comportamiento de disparar como el de cargar municiones

public class SistemaDisparador : MonoBehaviour {
	
	GameObject municion;
	public int cantidadMuniciones = 10;
	public Vector3 posRel = new Vector3(-1.76f, 1.2f, -3.3f);//La posicion relativa del proyectil con respecto al objeto
																	//que contiene este script(un poco al frente y arriba).
	public string nombreProyectil = "Proyectil";//Es el nombre del asset prefabricado que corresponde a un proyectil, definido
												//en un folder llamado "Resources". Este debe tener un "rigidbody".
	public string teclaDisparo = "p";
	public string teclaCargar = "c";

	public float fuerzaDisparo = 1000;
	public float elevacion = 1.0f;

	public AudioClip sonidoDisparo;
	public AudioClip sonidoCargar;

	private bool potencia = false;
	private float potenciaExtra = 0.0f;
	private float potenciaX;
	private float potenciaY;
	private float potenciaZ;
	private float temporal = 0.0f;

	//Realiza: Inicia el sistema disparador con una municion cargada
	void Start () {
		cargarProyectil();
		potenciaX = GameObject.Find("Potencia").transform.localScale.x;
		potenciaY = GameObject.Find("Potencia").transform.localScale.y;
		potenciaZ = GameObject.Find("Potencia").transform.localScale.z;
		GameObject.Find("Potencia").guiTexture.enabled = false;
	}
	
	//Realiza: Verifica las posibles teclas que activan una accion del sistema disparador
	void Update () {
		if ((Input.GetKeyDown(teclaDisparo)  || Input.GetKey(teclaDisparo)) && potenciaExtra <= 100) {
			if(municion){
				potencia = true;
				potenciaExtra += 1;
				temporal += 0.003f;
				GameObject.Find("Potencia").transform.localScale = new Vector3(potenciaX+temporal,potenciaY,potenciaZ); 
				GameObject.Find("Potencia").guiTexture.enabled = true;
			}
		}else{
			if (Input.GetKeyDown (teclaCargar) && !municion && 0<cantidadMuniciones) {
				cargarProyectil();
				if (sonidoCargar){
					audio.PlayOneShot (sonidoCargar);
				}
				--cantidadMuniciones;
			}
			else{
				if(potencia){
					disparar();
					if (sonidoDisparo){
						audio.PlayOneShot (sonidoDisparo);
					}
					potencia = false;
					temporal = 0.0f;
					GameObject.Find("Potencia").transform.localScale = new Vector3(potenciaX,potenciaY,potenciaZ); 
					potenciaExtra = 0;
					GameObject.Find("Potencia").guiTexture.enabled = false;
				}
			}
		
		}
	}

	//Realiza: cargar un proyectil como municion
	//Requiere: que exista un componente prefabricado proyectil con el nombre definido en la variable nombreProyectil
	//Modifica: la variable municion asignandole un nuevo proyectil
	void cargarProyectil (){
		municion = (GameObject) Instantiate (Resources.Load (nombreProyectil), transform.position, transform.rotation);
		municion.transform.parent = transform;
		municion.name = nombreProyectil;
		municion.transform.localPosition += posRel;
	}

	//Realiza: dispara un proyectil con la fuerza indicada en la variable fuerzaDisparo
	//Requiere: que exista una municion
	//Modifica: la municion actual desligandola del proyectil lanzado
	void disparar () {
		municion.transform.parent = null;
		municion.rigidbody.useGravity = true;
		municion.rigidbody.isKinematic = false;
		municion.rigidbody.AddForce((transform.forward + transform.up*elevacion) * (fuerzaDisparo*potenciaExtra));
		municion = null;
	}
}