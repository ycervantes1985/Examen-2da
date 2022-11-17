import React from 'react';
import * as Yup from "yup";
import { Field, Formik, Form } from 'formik';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const PetForm = (props) => {
    const { nombre, tipo, descripcion, skill1, skill2, skill3, onSubmitProp, action } = props
    
    return (
        <div>
            <Formik
                initialValues={{
                    nombre: nombre,
                    tipo: tipo,
                    descripcion: descripcion,
                    skill1: skill1,
                    skill2: skill2,
                    skill3: skill3,
                }}
                 validationSchema={Yup.object().shape({
                    nombre: Yup.string()
                        .min(3,"El nombre es muy corto")
                        .required("Por favor ingrese el nombre de la cancion"),
                    tipo: Yup.string()
                        .required("Por favor ingrese un tipo")
                        .min(3,"El tipo es muy corto"),
                    descripcion: Yup.string()
                    .required("Por favor ingrese una descripcion")
                    .min(3,"La descripcion es muy corta."),
                    skill1: Yup.string(),
                    skill2: Yup.string(),
                    skill3: Yup.string()

                })}
                onSubmit={(values, { setSubmitting }) => {
                    console.log("info del formik", values);
                    onSubmitProp(values);
                }}
            >
                {({ errors, touched, handleSubmit }) => {
                    return (<div className='container-form'>
                        
                        <div className='container-form-bottom'>
                        <h4>Know a pet needing a home?</h4>
                        <Form>
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-6">
                                        <label htmlFor="nombre">Pet name</label>
                                        <Field id="nombre" type="text" placeholder="Pet Name" name="nombre" className="form-control" />
                                        {errors.nombre && touched.nombre && <p>{errors.nombre}</p>}

                                        <label htmlFor="tipo">Tipo</label>
                                        <Field id="tipo" type="text" placeholder="tipo" name="tipo" className="form-control" />
                                        {errors.tipo && touched.tipo && <p>{errors.tipo}</p>}

                                        <label htmlFor="descripcion">Descripcion</label>
                                        <Field id="descripcion" type="text" placeholder="descripcion" name="descripcion" className="form-control" />
                                        {errors.descripcion && touched.descripcion && <p>{errors.descripcion}</p>}
                                    </div>
                                    <div class="col-md-6">
                                        <div>
                                            <label htmlFor="skill1">Skills (optional):</label>
                                        </div>                                        
                                        <label htmlFor="skill1">Skill 1</label>
                                        <Field id="skill1" type="text" placeholder="skill 1" name="skill1" className="form-control" />
                                        {errors.skill1 && touched.skill1 && <p>{errors.skill1}</p>}

                                        <label htmlFor="skill2">Skill 2</label>
                                        <Field id="skill2" type="text" placeholder="skill 2" name="skill2" className="form-control" />
                                        {errors.skill2 && touched.skill2 && <p>{errors.skill2}</p>}

                                        <label htmlFor="skill3">Skill 3</label>
                                        <Field id="skill3" type="text" placeholder="skill 3" name="skill3" className="form-control" />
                                        {errors.skill3 && touched.skill3 && <p>{errors.skill3}</p>}
                                    </div>
                                    
                                </div>
                                <button type="submit" /* disabled={Object.values(errors).length > 0 || Object.values(touched).length === 0} */>{action}</button>
                            </div>
                            
                        </Form>
                        </div>
                    </div>)
                }}

            </Formik>

        </div>
    );
}

export default PetForm;