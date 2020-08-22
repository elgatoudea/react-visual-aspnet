import React, { useState, useEffect } from "react";
import { Grid, TextField, withStyles, FormControl, InputLabel, Select, MenuItem, Button, FormHelperText } from "@material-ui/core";
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../actions/dCandidate";
import { useToasts } from "react-toast-notifications";

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 560,
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 560,
    },
    smMargin: {
        margin: theme.spacing(1)
    }
})

const initialFieldValues = {
    nombres: "",
    apellidos: "",
    tipoDocumento: "",
    numDocumento: "",
    fechaNacimiento: "1991-05-05T00:00:00",
    contactoEstrecho1: "",
    viajo: "",
    viajeNivel: "",
    destino: ""

}

const DCandidateForm = ({ classes, ...props }) => {

    //toast msg.
    const { addToast } = useToasts()

    //validate()
    //validate({fullName:'jenny'})
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('nombres' in fieldValues)
            temp.nombres = fieldValues.nombres ? "" : "Este texto es requerido."
        if ('apellidos' in fieldValues)
            temp.apellidos = fieldValues.apellidos ? "" : "Este texto es requerido."
        if ('tipoDocumento' in fieldValues)
            temp.tipoDocumento = fieldValues.tipoDocumento ? "" : "Este texto es requerido."
        if ('numDocumento' in fieldValues)
            temp.numDocumento = fieldValues.numDocumento ? "" : "Este texto es requerido."
        if ('fechaNacimiento' in fieldValues)
            temp.fechaNacimiento = fieldValues.fechaNacimiento ? "" : "Este texto es requerido."
        if ('contactoEstrecho1' in fieldValues)
            temp.contactoEstrecho1 = fieldValues.contactoEstrecho1 ? "" : "Este texto es requerido."
        if ('viajo' in fieldValues)
            temp.viajo = fieldValues.viajo ? "" : "Este texto es requerido."
        if ('viajeNivel' in fieldValues)
            temp.viajeNivel = fieldValues.viajeNivel ? "" : "Este texto es requerido."
        if ('destino' in fieldValues)
            temp.destino = fieldValues.destino ? "" : "Este texto es requerido."

        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFieldValues, validate, props.setCurrentId)

    //material-ui select
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const onSuccess = () => {
                resetForm()
                addToast("Submitted successfully", { appearance: 'success' })
            }
            if (props.currentId == 0)
                props.createDCandidate(values, onSuccess)
            else
                props.updateDCandidate(props.currentId, values, onSuccess)
        }
    }

    useEffect(() => {
        if (props.currentId != 0) {
            setValues({
                ...props.dCandidateList.find(x => x.id == props.currentId)
            })
            setErrors({})
        }
    }, [props.currentId])

    return (
        <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={0}>
                    <TextField
                        name="nombres"
                        variant="outlined"
                        label="Nombres"
                        value={values.nombres}
                        onChange={handleInputChange}
                        {...(errors.nombres && { error: true, helperText: errors.nombres })}
                    />
                    <TextField
                        name="apellidos"
                        variant="outlined"
                        label="Apellidos"
                        value={values.apellidos}
                        onChange={handleInputChange}
                        {...(errors.apellidos && { error: true, helperText: errors.apellidos })}
                    />

                    <FormControl variant="outlined"
                        className={classes.formControl}
                        {...(errors.tipoDocumento && { error: true })}
                    >
                        <InputLabel ref={inputLabel}>Tipo de documento</InputLabel>
                        <Select
                            name="tipoDocumento"
                            value={values.tipoDocumento}
                            onChange={handleInputChange}
                            labelWidth={labelWidth}
                        >
                            <MenuItem value="">Seleccione Tipo de Documento</MenuItem>
                            <MenuItem value="TI">Tarjeta de Identidad</MenuItem>
                            <MenuItem value="CC">Cédula de Ciudadanía</MenuItem>
                            <MenuItem value="CE">Cédula de Extranjería</MenuItem>
                        </Select>
                        {errors.tipoDocumento && <FormHelperText>{errors.tipoDocumento}</FormHelperText>}
                    </FormControl>

                    <TextField
                        name="numDocumento"
                        variant="outlined"
                        label="Número de documento"
                        value={values.numDocumento}
                        onChange={handleInputChange}
                        {...(errors.numDocumento && { error: true, helperText: errors.numDocumento })}
                    />

                    <TextField
                        id="date"
                        name="fechaNacimiento"
                        variant="outlined"
                        label="Fecha de Nacimiento"
                        type="date"
                        value={values.fechaNacimiento}
                        defaultValue={"2017-05-24"}
                        onChange={handleInputChange}
                        {...(errors.numDocumento && { error: true, helperText: errors.numDocumento })}
                        
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                </Grid>
                <hr/>
                <Grid item xs={0}>

                    <FormControl variant="outlined"
                        className={classes.formControl}
                        {...(errors.contactoEstrecho1 && { error: true })}
                    >
                        <InputLabel ref={inputLabel}>Tuvo contacto estrecho con algún paciente</InputLabel>
                        <Select
                            name="contactoEstrecho1"
                            value={values.contactoEstrecho1}
                            onChange={handleInputChange}
                            labelWidth={labelWidth}
                        >
                            <MenuItem value="">Seleccione</MenuItem>
                            <MenuItem value="SI">Si</MenuItem>
                            <MenuItem value="NO">No</MenuItem>
                        </Select>
                        {errors.contactoEstrecho1 && <FormHelperText>{errors.contactoEstrecho1}</FormHelperText>}
                    </FormControl>

                    <FormControl variant="outlined"
                        className={classes.formControl}
                        {...(errors.viajo && { error: true })}
                    >
                        <InputLabel ref={inputLabel}>Viajó a áreas de Circulación del Covid-19</InputLabel>
                        <Select
                            name="viajo"
                            value={values.viajo}
                            onChange={handleInputChange}
                            labelWidth={labelWidth}
                        >
                            <MenuItem value="">Seleccione</MenuItem>
                            <MenuItem value="SI">Si</MenuItem>
                            <MenuItem value="NO">No</MenuItem>
                        </Select>
                        {errors.viajo && <FormHelperText>{errors.viajo}</FormHelperText>}
                    </FormControl>


                    <FormControl variant="outlined"
                        className={classes.formControl}
                        {...(errors.viajeNivel && { error: true })}
                    >
                        <InputLabel ref={inputLabel}>Viajó a nivel a Nacional o Internacional</InputLabel>
                        <Select
                            name="viajeNivel"
                            value={values.viajeNivel}
                            onChange={handleInputChange}
                            labelWidth={labelWidth}
                        >
                            <MenuItem value="">Seleccione</MenuItem>
                            <MenuItem value="NAC">Nacional</MenuItem>
                            <MenuItem value="INT">Internacional</MenuItem>
                        </Select>
                        {errors.viajeNivel && <FormHelperText>{errors.viajeNivel}</FormHelperText>}
                    </FormControl>


                    <TextField
                        name="destino"
                        variant="outlined"
                        label="Cuál fue el destino"
                        value={values.destino}
                        onChange={handleInputChange}
                        {...(errors.destino && { error: true, helperText: errors.destino })}
                    />

                    <div align="center">
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.smMargin}
                        >
                            Enviar
                        </Button>
                        <Button
                            variant="contained"
                            className={classes.smMargin}
                            onClick={resetForm}
                        >
                            Limpiar
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </form>
    );
}


const mapStateToProps = state => ({
    dCandidateList: state.dCandidate.list
})

const mapActionToProps = {
    createDCandidate: actions.create,
    updateDCandidate: actions.update
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(DCandidateForm));