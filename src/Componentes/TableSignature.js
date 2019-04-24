import React from 'react';


class TableSignature extends React.Component {

	render(){
		const usuario = this.props.usuario;

		return (
			<div id="copyfirma">
                <table border={0} cellSpacing={0}>
                    <tbody>
                        <tr>
                            <td style={{height:10}}>                                
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table border={0} cellSpacing={0} cellPadding={0}>
                    <tbody>
                            <tr>
                                <td>
                                    <table border={0} cellSpacing={0} cellPadding={0}>
                                        <tbody>
                                            <tr>
                                                <td><img src={`./images/${usuario.pathlogo}.png`} alt="logo MP"  height={43} /></td>
                                                <td style={{width:10}}></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td valign="top">
                                    <table border={0} cellSpacing={0} cellPadding={0}>
                                        <tbody>
                                             <tr>
                                                <td style={{width:10}} className='separador'></td>
                                                <td  style={{borderLeft:'solid 1px #d0d3d4', padding:0, margin:0, verticalAlign:'top'}}>
                                                     <table border={0} cellSpacing={0} cellPadding={0}>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <table border={0} cellSpacing={0} cellPadding={0}>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width={5}></td>
                                                                                <td>
                                                                                    <span id="nombre" style={{fontFamily: 'arial narrow, helvetica, sans-serif',fontSize: 12, color: '#b70039', textTransform:'capitalize'}}>
                                                                                        {`${usuario.username} `}
                                                                                    </span>
                                                                                </td>
                                                                                <td width={5}></td>
                                                                                <td>
                                                                                    <span id="apellidos" style={{fontFamily: 'arial narrow, helvetica, sans-serif', fontSize: 12, color: '#666666', textTransform:'uppercase'}}>
                                                                                        {` ${usuario.surname}`}
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <table border={0} cellSpacing={0} cellPadding={0}>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width={5}></td>
                                                                                <td>
                                                                                    <span id="jobtittlees" style={{fontFamily: "arial narrow, helvetica, sans-serif",fontSize: 12, color: "#5B6770", fontWeight:'bold', textTransform:'capitalize'}}>
                                                                                        {usuario.nativejobtitle}
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>                                                                      
                                                            <tr>
                                                                <td>
                                                                    <table border={0} cellSpacing={0} cellPadding={0}>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width={5}></td>
                                                                                <td>
                                                                                    <span id="jobtittleen" style={{fontFamily: 'arial narrow, helvetica, sans-serif',fontSize: 12, color: '#717D87', textTransform:'capitalize'}}>
                                                                                        {usuario.englishjobtitle}
                                                                                    </span>
                                                                                </td> 
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>         
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td style={{width:10}} className='separador'></td>
                                                <td  style={{borderLeft:'solid 1px #d0d3d4', padding:0, margin:0, verticalAlign:'top'}}>
                                                    <table border={0} cellSpacing={0} cellPadding={0}>
                                                        <tbody>
                                                            <tr>
                                                                <td width={5}></td>
                                                                <td style={{textAlign :'left',verticalAlign:'middle'}}>
                                                                    <img src={`./images/mail_icon.png`} alt="mail" style={{display:'block'}} />
                                                                </td>
                                                                 <td style={{textAlign :'left',verticalAlign:'top',paddingLeft:3}}>
                                                                    
                                                                        <a href={`mailto:${usuario.usermail}@${usuario.maildomain}`} style={{textDecoration:'none',fontFamily: 'arial narrow, helvetica, sans-serif',fontSize: 12, color: '#5B6770'}}>{`${usuario.usermail}@${usuario.maildomain}`}</a>
                                                                  
                                                                </td>
                                                            </tr>
                                                            {(usuario.mobilephone !== '')?(
                                                            <tr>
                                                                <td width={5}></td>
                                                                <td style={{textAlign :'left',verticalAlign:'middle'}}>
                                                                    <img src={`./images/mobile_icon.png`} alt="mobile" style={{display:'block'}} />
                                                                </td>
                                                                <td style={{textAlign :'left',verticalAlign:'top',paddingLeft:3}}>
                                                                    
                                                                        <span id="mobileuser" style={{fontFamily: 'arial narrow, helvetica, sans-serif', fontSize: 12, color: '#666666', textTransform:'uppercase'}}>
                                                                            {usuario.mobilephone}
                                                                        </span>
                                                                    
                                                                </td>
                                                            </tr>
                                                            ):null}
                                                        </tbody>
                                                    </table>
                                                </td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                    </tbody>
                </table>

                <table border={0} cellSpacing={0} width={600} cellPadding={0}>
                    <tbody>
                        <tr>
                            <td style={{height:20}}>                                
                            </td>
                        </tr>
                    </tbody>
                </table>

               <table border={0} cellSpacing={0} width={600} cellPadding={0}>
                    <tbody>
                        <tr>
                            <td valign="top" style={{textAlign :'left'}}>
                                <a href={`http://media.macpuarsa.es/FIRMAS/MPASCENSORES/2019/redirect.html?logo=${usuario.pathlogo}&language=${usuario.idioma}`}>
                                    <img src={`./images/${usuario.pathlogo}_pie_${usuario.idioma}.jpg`} alt="imagen MP"  style={{display:'block'}} />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table border={0} cellSpacing={0} width={600} cellPadding={0}>
                    <tbody>
                        <tr>
                            <td style={{textAlign :'left', width:20}}>
                                <img src={`./images/location_on.png`} alt="location"  style={{display:'block'}} />
                            </td>
                            <td valign="top" style={{textAlign :'left', borderBottom:'solid 1px #DEDEDE'}}>
                                {(usuario.office!=null)?(
                                    <React.Fragment>
                                        <div style={{marginTop:0, marginBottom:0, marginLeft:5,fontFamily: 'arial narrow, helvetica, sans-serif',fontSize: 12, color: '#5B6770'}}  id="locationuser">
                                            {(usuario.office.direccion1 !== '')?(<React.Fragment>{usuario.office.direccion1} </React.Fragment>):null}
                                            {(usuario.office.direccion2 !== '')?(<React.Fragment><span style={{color:'#CC0033', fontSize:18}}>&#8226;</span> {usuario.office.direccion2} </React.Fragment>):null}
                                            {(usuario.office.telefono1 !== '')?(<React.Fragment><span style={{color:'#CC0033', fontSize:18}}>&#8226;</span> {usuario.office.telefono1} </React.Fragment>):null}
                                            {(usuario.extofficephone !== '')?(<React.Fragment><span style={{color:'#CC0033', fontSize:18}}>&#8226;</span> Ext: {usuario.extofficephone}</React.Fragment>):null}
                                        </div>
                                    </React.Fragment>
                                ):(<div></div>)}
                            </td>
                        </tr>
                        <tr>
                            <td style={{textAlign :'left', width:20}}>
                                <img src={`./images/link_icon.png`} alt="website" />
                            </td>
                            <td style={{textAlign :'left',verticalAlign:'top'}}>
      
                                    <a href={`http://www.${usuario.webdomain}`} style={{textDecoration:'none',fontFamily: 'arial narrow, helvetica, sans-serif',fontSize: 12, color: '#b70039'}}>{`www.${usuario.webdomain}`}</a>

                            </td>
                        </tr>
                    </tbody>
                </table>

                <table border={0} cellSpacing={0} width={600} cellPadding={0}>
                    <tbody>
                        <tr>
                            <td valign="top" style={{textAlign :'right'}}>
                                <img src={`./images/mpmovingpeople.png`} alt="MP MOVING PEOPLE" />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table border={0} cellSpacing={0} width={600} cellPadding={0}>
                  <tbody>
                        <tr>
                            <td style={{fontFamily: 'arial narrow, helvetica, sans-serif', fontSize: 11, color: '#bdbdbd', textAlign: 'center'}}>
                                <p style={{fontFamily: 'arial narrow, helvetica, sans-serif', fontSize: 11, color: '#bdbdbd', textAlign: 'center'}}>
                                    The information contained in this document and attached files are private 
                                    and confidential, and are destined for the sole use of the addressee. It
                                         is forbidden to reproduce, publish or divulge, totally or partially 
                                        this message, as well as any use of same unauthorised by the sender. If 
                                        you have received this message erroneously please delete it, as well as 
                                        all copies, and immediately notify the sender of this circumstance.
                                </p>
                                <p>
                                    <img src={`./images/paperless305x22.jpg`} alt="paperless" height={23} width={305} />
                                </p>
                            </td>
                        </tr>
                  </tbody>
              </table>

            </div>
			);
	}
}

export default TableSignature;