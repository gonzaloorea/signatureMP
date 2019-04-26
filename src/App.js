import React, { Component } from 'react';
import TarjetaLocation from './Componentes/TarjetaLocation';
import TableSignature from './Componentes/TableSignature';
import CampoTexto from './Componentes/CampoTexto';
import CampoSeleccion from './Componentes/CampoSeleccion';
import BarraMenu from './Componentes/BarraMenuCompany';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';
import CreateIcon from '@material-ui/icons/Create';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import Button from '@material-ui/core/Button';
import Infotutorial from './Componentes/Infotutorial';
import SaveIcon from '@material-ui/icons/Save';
import Clipboard from "react-clipboard.js";

import './App.css';
import {sedesMP,logosMP} from './data/datos.js'; // aquí sedesMP y logosMP son variables globales que cualquier componente puede consumir


function Logo(props) {
    return (
      <div style={{textAlign: 'left'}}>
        <img src={`./images/${props.logo}_w.svg`} alt="logo MP" height={props.altura}/>
      </div>
    );
}

function SubHeader(props) {
    return (
      <header className="App-subheader">
        <Typography variant='h4' style={{color:'white'}}>{`Configura tu firma / Set up your signature`}</Typography>
      </header>
    );
}

function SelectDomain(props){
  return (
    <div>
      <CampoSeleccion 
        valor={props.dominio} 
        handleSeleccion={props.dominioseleccionado} 
        listaseleccion={props.lista} 
        campolabel="dominio/domain" 
        campolabelayuda="dominio/domain" 
        name="seldomain" 
        keytoiterate="valor"/>
    </div>
  );
}

function MuestraInfoUserSiLogo(props){
  //Encuentra el objeto del arreglo 'logosMP' que coincide con el nombre del logo
  let filtradoLogo = logosMP.find((element)=>(element.name === props.logotipo)); //devuelve el objeto asociado al logo

  //bucle sobre las propiedades del objeto
  const domains = filtradoLogo.emaildomain; //objeto de dominios
/*
 // como ejemplo, para el caso de logo MP props.logotipo = MP, el objeto es
 //      {
 //         es : 'mpascensores.com',
 //         en : 'mplifts.com',
 //         fr : 'mpascenseurs.com',
 //         de : 'mpaufzuegue.com'
 //       }
 */
  const vectorclavesdominios = Object.keys(domains); //Array con las claves: ['se','es','en','fr','de']
  const listadoDominios = vectorclavesdominios.map(function(elem){
                                                        return {
                                                                  clave:elem,
                                                                  valor:domains[elem]
                                                                };
                                                      });
  /*como ejemplo, para el caso de logo MP "props.logotipo == MP", el objeto es:
        [
          {
            clave: 'es',
            valor : 'mpascensores.com'
          },
          {
            clave: 'en',
            valor : 'mplifts.com'
          },
..................y asi con el resto
      ]
  */
  let handleChange = (evt) => props.modifDatosPersonales(evt.target);
  let handleSelected =  (evt) => props.modifDatosDominio(evt);


  return (
    <React.Fragment>
          <Grid container justify="space-around">
            <Grid item xs={6} style={{paddingRight:10}}>
                <CampoTexto idvalue="username" namevalue="username" typevalue="text" labelvalue="nombre/name" onChangevalue={handleChange}/>
            </Grid>
            <Grid item xs={6} style={{paddingRight:10}}>
                <CampoTexto idvalue="usersurname" namevalue="surname" typevalue="text" labelvalue="apellido/surname" onChangevalue={handleChange}/>
            </Grid>
            <Grid item xs={6} style={{paddingRight:10}}>
                <CampoTexto idvalue="jobtitleinnatiive" namevalue="nativejobtitle" typevalue="text" labelvalue="JobTitle native/Puesto (esp)" onChangevalue={handleChange}/>
            </Grid>
            <Grid item xs={6} style={{paddingRight:10}}>
                <CampoTexto idvalue="jobtitleinenglish" namevalue="englishjobtitle" typevalue="text" labelvalue="JobTitle english/Puesto (eng)" onChangevalue={handleChange}/>
            </Grid>
            <Grid item xs={6} style={{paddingRight:10}}>
                <CampoTexto idvalue="mobilephone" namevalue="mobilephone" typevalue="text" labelvalue="mobile/movil nº" onChangevalue={handleChange}/>
            </Grid>
            <Grid item xs={6} style={{paddingRight:10}}>
                <CampoTexto idvalue="extofficephone" namevalue="extofficephone" typevalue="text" labelvalue="office extension e.g. (1234):" onChangevalue={handleChange}/>
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={12}>
              <Grid container  className="margeninf" style={{marginTop:20}}>
                <Grid item xs={5} style={{paddingRight:10}}>
                  <CampoTexto idvalue="mailuser" namevalue="usermail" typevalue="text" labelvalue="email user" onChangevalue={handleChange}/>
                </Grid>
                <Grid item xs={1} style={{textAlign:'center'}}>
                  <AlternateEmailIcon color="secondary" style={{marginTop:20}}/>
                </Grid>
                <Grid item xs={6}>
                  <SelectDomain lista={listadoDominios} dominio={props.dominio} dominioseleccionado={handleSelected} />
                </Grid>
              </Grid>
              <Divider />
            </Grid>
          </Grid>
    </React.Fragment>
  );
}

function MuestraLocationUserSiLogo(props){
  //filtramos las ubicaciones según logo nombre
  let listadoubicaciones = sedesMP.filter((elem)=>elem.logoname === props.logotipo);
  let ubicacionesfinal = listadoubicaciones.map((elem)=>(<Grid item xs={4}><TarjetaLocation nombre={elem} manejaubicacion={props.handleselectedubicacion} /></Grid>));
  

  return (
      <React.Fragment>
          <Grid container>

            <Grid item xs={12}>
              <Grid container wrap='wrap' alignContent="center">
                {ubicacionesfinal}
              </Grid>
            </Grid>
          </Grid>
      </React.Fragment>
    );
}

class MuestraLocationAlternativa extends React.Component {ç
  constructor(props){
    super(props);
    this.handleChangeAlternativa = this.handleChangeAlternativa.bind(this);
    this.state = {
      back : false,
    };
  }

  handleChangeAlternativa = (event)=>{
    this.props.handleDirAlternativa(event.target);
  };
  handlebanderaBotonAdd = () => {
    this.setState((state, props) => {
                return {back: !state.back};
              });
  }

  render(){
      return (
        <React.Fragment>
          <Grid container wrap='wrap' style={{backgroundColor:"#D7DCE5", padding:5, borderRadius:15}}>
         
              <Grid item xs={3}>
              {!(this.state.back) ? 
                <Fab variant="extended" color="secondary" size="small" aria-label="Add" onClick={this.handlebanderaBotonAdd}>
                  <CreateIcon/>modify/new
                </Fab>
                :
                <Fab variant="extended" color="secondary" size="small" aria-label="Add" onClick={this.handlebanderaBotonAdd}>
                  <ArrowBackIcon/>back
                </Fab>
              }
              </Grid>
              {(this.state.back) ?
              (<Grid item xs={9} style={{borderLeft:"solid thin #EEF0F4", paddingRight:10}}>
                  <CampoTexto idvalue="dir1" namevalue="direccion1" typevalue="text" labelvalue="street, nº" valor={this.props.usuario.office.direccion1} onChangevalue={this.handleChangeAlternativa}/>
                  <CampoTexto idvalue="dir2" namevalue="direccion2" typevalue="text" labelvalue="P.O. city, Country" valor={this.props.usuario.office.direccion2} onChangevalue={this.handleChangeAlternativa}/>
                  <CampoTexto idvalue="ph1" namevalue="telefono1" typevalue="text" labelvalue="phone number" valor={this.props.usuario.office.telefono1} onChangevalue={this.handleChangeAlternativa}/>
              </Grid>):(null)}
  
          </Grid>
      </React.Fragment>
        );
    }
}


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nombrelogo : 'logo',
      pathlogo : 'logo',
      username : '',
      surname : '',
      usermail : '',
      maildomain : '',
      nativejobtitle : '',
      englishjobtitle : '',
      mobilephone : '',
      extofficephone : '',
      office : null,
      webdomain : '',
      idioma:'en'
    };
    this.adaptaLogo = this.adaptaLogo.bind(this);
    this.adaptaDominio = this.adaptaDominio.bind(this);
    this.handleDatosPersonales = this.handleDatosPersonales.bind(this);
    this.handleDatosDominio = this.handleDatosDominio.bind(this);
    this.handleUbicacionSede = this.handleUbicacionSede.bind(this);
    this.handleUbicacionAlternativa = this.handleUbicacionAlternativa.bind(this);

  }

  adaptaLogo(nuevologo){
    let logoselected = logosMP.find((elem)=>nuevologo===elem.name)
    let {name,path,emaildomain,webdomain,defaultlang} = logoselected;
    this.setState({
      nombrelogo : name,
      pathlogo : path,
      idioma : defaultlang,
      office : null,
      maildomain : logoselected.emaildomain[defaultlang],
      webdomain : logoselected.webdomain[defaultlang]
    })
  }
  adaptaDominio(nuevodominio){
    this.setState({usermail : nuevodominio});
  }
  handleDatosPersonales(valor){
    this.setState({[valor.name] : valor.value})
  };
  handleDatosDominio(event){
    const sedeselect = logosMP.find((elem)=>(elem.name === this.state.nombrelogo));
    const dominios = sedeselect.webdomain;
    const identifier = event.currentTarget.id;
    
    //console.log(event.currentTarget.id);
    //console.log(dominios);

    this.setState({
      maildomain : event.target.value,
      webdomain : dominios[identifier],
      idioma: identifier,
    });
  
  };
  handleUbicacionSede(valor){
    this.setState({
      office : valor,
    });
  }
  handleUbicacionAlternativa(valor){
    this.setState((state,props)=>{
      const nuevadir = state.office;
      nuevadir[valor.name] = valor.value;
      return ({office : nuevadir});
    });
  }

  render() {
    let nombrelogo = this.state.nombrelogo;
    return (
      <div className="App">
        <SubHeader />
        <div className="contenedor">
          <BarraMenu logoseleccionado={this.adaptaLogo} listaseleccion={logosMP} keytoiterate="name" logoicon={<Logo logo={this.state.pathlogo} altura={50} />}/>
        </div>
        <div className="contenedor">
          <Grid container spacing={16} wrap='nowrap' justify='space-around'>
            <Grid item xs={5}>
                  <Grid container wrap='wrap'>
                    <Grid item xs={12}>
                      
                        <Grid container alignContent="center">
                            {(nombrelogo !== 'logo')
                              ?(<MuestraInfoUserSiLogo logotipo={nombrelogo} dominio={this.state.maildomain} modifDatosPersonales={this.handleDatosPersonales} modifDatosDominio={this.handleDatosDominio} />)
                              :(<Logo logo='principal' altura={316} />)
                            }
                        </Grid>
                      
                    </Grid>
                    <Grid item xs={12}>
                      {(nombrelogo !== 'logo')?(
                        <Grid container wrap='wrap'>
                          <Grid item xs={12} style={{marginTop:10, marginBottom:10}}>
                            {
                              (this.state.office!=null)
                              ?<MuestraLocationAlternativa usuario={this.state} handleDirAlternativa={this.handleUbicacionAlternativa}/>
                              :<Typography variant="h6" gutterBottom>Seleccione Centro de Trabajo / Select Job Centre: </Typography>
                            }
                          </Grid>
                          <Grid item xs={12}>
                            <MuestraLocationUserSiLogo logotipo={nombrelogo} handleselectedubicacion={this.handleUbicacionSede}/>
                          </Grid>

                        </Grid>
                        ):(null)}
                    </Grid>
                  </Grid>
            </Grid>
            <Grid item xs={1} style={{width:10}}></Grid>
            <Grid item xs={6}>
              {(nombrelogo !== 'logo')?(
              <React.Fragment>
                <TableSignature usuario={this.state} logo={this.state.pathlogo} />
                <Clipboard component="a" button-href="#" data-clipboard-target="#copyfirma">
                  <Button variant="contained" size="small" style={{marginTop:40, marginLeft:250, textDecoration:'none'}}>
                    <SaveIcon />
                    Copy / Copiar
                  </Button>
                </Clipboard>
              </React.Fragment>
                ):(<Infotutorial/>)
              }
            </Grid>
          </Grid>
        </div>

      </div>
    );
  }
}

export default App;
