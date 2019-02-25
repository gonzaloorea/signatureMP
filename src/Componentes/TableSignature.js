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
                                                <td><img src={`./images/${this.props.logo}.png`} alt="logo MP"  height={43} /></td>
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
                                                <td  style={{borderLeft:'solid 1px #909da7', padding:0, margin:0, verticalAlign:'top'}}>
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
                                                            <tr>
                                                                <td width={5}></td>
                                                                <td colspan="3">
                                                                    <span id="jobtittlees" style={{fontFamily: "arial narrow, helvetica, sans-serif",fontSize: 12, color: "#5B6770", fontWeight:'bold', textTransform:'capitalize'}}>
                                                                        {usuario.nativejobtitle}
                                                                    </span>
                                                                </td>
                                                            </tr>                                                                      
                                                            <tr>
                                                                <td width={5}></td>
                                                                <td colspan="3">
                                                                    <span id="jobtittleen" style={{fontFamily: 'arial narrow, helvetica, sans-serif',fontSize: 12, color: '#717D87'}}>
                                                                        {usuario.englishjobtitle}
                                                                    </span>
                                                                </td>           
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td style={{width:10}} className='separador'></td>
                                                <td  style={{borderLeft:'solid 1px #909da7', padding:0, margin:0, verticalAlign:'top'}}>
                                                    <table border={0} cellSpacing={0} cellPadding={0}>
                                                        <tbody>
                                                            <tr>
                                                                <td width={5}></td>
                                                                <td style={{textAlign :'left',verticalAlign:'middle'}}>
                                                                    <img src={`./images/mail_icon.png`} alt="mail" style={{display:'block'}} />
                                                                </td>
                                                                 <td style={{textAlign :'left',verticalAlign:'top'}}>
                                                                    <p style={{marginTop:0, marginBottom:0, marginLeft:5}}  id="usermail">
                                                                        <a href={`mailto:${usuario.usermail}@${usuario.maildomain}`} style={{textDecoration:'none',fontFamily: 'arial narrow, helvetica, sans-serif',fontSize: 12, color: '#b70039'}}>{`${usuario.usermail}@${usuario.maildomain}`}</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td width={5}></td>
                                                                <td style={{textAlign :'left',verticalAlign:'middle'}}>
                                                                    <img src={`./images/mobile_icon.png`} alt="mobile" style={{display:'block'}} />
                                                                </td>
                                                                <td style={{textAlign :'left',verticalAlign:'top'}}>
                                                                    <p style={{marginTop:0, marginBottom:0, marginLeft:5}}  id="usermail">
                                                                        <span id="mobileuser" style={{fontFamily: 'arial narrow, helvetica, sans-serif', fontSize: 12, color: '#666666', textTransform:'uppercase'}}>
                                                                            {usuario.mobilephone}
                                                                        </span>
                                                                    </p>
                                                                </td>
                                                            </tr>
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
                                <img src={`./images/${this.props.logo}_pie.jpg`} alt="imagen MP"  style={{display:'block'}} />
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
                                            {`${usuario.office.nombresede} `}
                                            <span style={{color:'#CC0033', fontSize:18}}>&#8226;</span>
                                            {` ${usuario.office.direccion1} `}
                                            <span style={{color:'#CC0033', fontSize:18}}>&#8226;</span>
                                            {` ${usuario.office.direccion2} `}
                                            <span style={{color:'#CC0033', fontSize:18}}>&#8226;</span>
                                            {` ${usuario.office.telefono1} `}
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
                                <p style={{marginTop:0, marginBottom:0, marginLeft:5}}>
                                    <a href={`http://www.${usuario.webdomain}`} style={{textDecoration:'none',fontFamily: 'arial narrow, helvetica, sans-serif',fontSize: 12, color: '#b70039'}}>{`www.${usuario.webdomain}`}</a>
                                </p>
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