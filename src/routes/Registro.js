import React from "react";
import { Titulo, Containerone, Contenedor, Formulario, Enviar, Input } from '../elementos/Formularios';
import ComponenteInput from '../componentes/Input';
import image from '../assets/mu4.png';

const Registro = () => {
    return (
        <main>
            <Contenedor>
                <Formulario action=''>

                    <Titulo>Registra a tu vaca</Titulo>
                    <Containerone>

                        <ComponenteInput
                            tipo='text'
                            nombre='nombre'
                            label='Nombre'
                        />
                        <ComponenteInput
                            tipo='text'
                            nombre='sexo'
                            label='Sexo'
                        />
                        <ComponenteInput
                            tipo='text'
                            nombre='grupo'
                            label='Grupo'
                        />
                        <ComponenteInput
                            tipo='text'
                            nombre='raza'
                            label='Raza'
                        />
                        <ComponenteInput
                            tipo='text'
                            nombre='utp'
                            label='UTP'
                        />
                        <ComponenteInput
                            tipo='text'
                            nombre='fechaNa'
                            label='Fecha de nacimiento'
                        />
                        <ComponenteInput
                            tipo='text'
                            nombre='etapa'
                            label='Etapa'
                        />
                        <ComponenteInput
                            tipo='text'
                            nombre='padres'
                            label='Padres'
                        />
                        <ComponenteInput
                            tipo='text'
                            nombre='peso'
                            label='Peso'
                        />

                        <ComponenteInput
                            tipo='file'
                            nombre='peso'
                        />

                        <Enviar type="submit" class="form__submit" value="Registrar"/>
                    </Containerone>
                </Formulario>
            </Contenedor>
        </main>
    )
}

export default Registro