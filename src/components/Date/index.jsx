import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './styles.css'

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
        margin: theme.spacing(0.5),
        border: 0,
        '&.Mui-disabled': {
            border: 0,
        },
        '&:not(:first-of-type)': {
            borderRadius: theme.shape.borderRadius,
        },
        '&:first-of-type': {
            borderRadius: theme.shape.borderRadius,
        },
    },
}));

export default function Date() {

    return (

        <div className='week'>
            <div className='monday'>
                <Paper
                    elevation={0}
                    sx={{
                        display: 'flex',
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        flexWrap: 'wrap',
                    }}
                >

                    <StyledToggleButtonGroup
                        size="small"
                        aria-label="text formatting"
                        orientation='vertical'
                    >
                        <ToggleButton value="one" disabled>
                            Segunda
                        </ToggleButton>
                        <ToggleButton value="two" aria-label="two">
                            18:00 - 18:30
                        </ToggleButton>
                        <ToggleButton value="three" aria-label="three">
                            18:30 - 19:00
                        </ToggleButton>
                        <ToggleButton value="four" aria-label="four">
                            19:00 - 19:30
                        </ToggleButton>
                        <ToggleButton value="five" aria-label="five">
                            19:30 - 20:00
                        </ToggleButton>
                        <ToggleButton value="six" aria-label="six">
                            20:00 - 20:30
                        </ToggleButton>
                    </StyledToggleButtonGroup>
                </Paper>
            </div>

            <div className='tuesday'>
                <Paper
                    elevation={0}
                    sx={{
                        display: 'flex',
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        flexWrap: 'wrap',
                    }}
                >

                    <StyledToggleButtonGroup
                        size="small"

                        aria-label="text formatting"
                        orientation='vertical'
                    >
                        <ToggleButton value="tu1" disabled>
                            TerÃ§a
                        </ToggleButton>
                        <ToggleButton value="tu2" aria-label="tu2">
                            18:00 - 18:30
                        </ToggleButton>
                        <ToggleButton value="tu3" aria-label="tu3">
                            18:30 - 19:00
                        </ToggleButton>
                        <ToggleButton value="tu4" aria-label="tu4">
                            19:00 - 19:30
                        </ToggleButton>
                        <ToggleButton value="tu5" aria-label="tu5">
                            19:30 - 20:00
                        </ToggleButton>
                        <ToggleButton value="tu6" aria-label="tu6">
                            20:00 - 20:30
                        </ToggleButton>
                    </StyledToggleButtonGroup>
                </Paper>
            </div>

            <div className='wednesday'>
                <Paper
                    elevation={0}
                    sx={{
                        display: 'flex',
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        flexWrap: 'wrap',
                    }}
                >

                    <StyledToggleButtonGroup
                        size="small"

                        aria-label="text formatting"
                        orientation='vertical'
                    >
                        <ToggleButton value="we1" disabled>
                            Quarta
                        </ToggleButton>
                        <ToggleButton value="wed2" aria-label="wed2">
                            18:00 - 18:30
                        </ToggleButton>
                        <ToggleButton value="wed3" aria-label="wed3">
                            18:30 - 19:00
                        </ToggleButton>
                        <ToggleButton value="wed4" aria-label="wed4">
                            19:00 - 19:30
                        </ToggleButton>
                        <ToggleButton value="wed5" aria-label="wed5">
                            19:30 - 20:00
                        </ToggleButton>
                        <ToggleButton value="wed6" aria-label="wed6">
                            20:00 - 20:30
                        </ToggleButton>
                    </StyledToggleButtonGroup>
                </Paper>


            </div>

            <div className='thursday'>
                <Paper
                    elevation={0}
                    sx={{
                        display: 'flex',
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        flexWrap: 'wrap',
                    }}
                >

                    <StyledToggleButtonGroup
                        size="small"

                        aria-label="text formatting"
                        orientation='vertical'
                    >
                        <ToggleButton value="th1" disabled>
                            Quinta
                        </ToggleButton>
                        <ToggleButton value="th2" aria-label="th2">
                            18:00 - 18:30
                        </ToggleButton>
                        <ToggleButton value="th3" aria-label="th3">
                            18:30 - 19:00
                        </ToggleButton>
                        <ToggleButton value="th4" aria-label="th4">
                            19:00 - 19:30
                        </ToggleButton>
                        <ToggleButton value="th5" aria-label="th5">
                            19:30 - 20:00
                        </ToggleButton>
                        <ToggleButton value="th6" aria-label="th6">
                            20:00 - 20:30
                        </ToggleButton>
                    </StyledToggleButtonGroup>
                </Paper>

            </div>

            <div className='friday'>
                <Paper
                    elevation={0}
                    sx={{
                        display: 'flex',
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        flexWrap: 'wrap',
                    }}
                >

                    <StyledToggleButtonGroup
                        size="small"

                        aria-label="text formatting"
                        orientation='vertical'
                    >
                        <ToggleButton value="friday1" disabled>
                            Sexta
                        </ToggleButton>
                        <ToggleButton value="friday2" aria-label="friday2">
                            18:00 - 18:30
                        </ToggleButton>
                        <ToggleButton value="friday3" aria-label="friday3">
                            18:30 - 19:00
                        </ToggleButton>
                        <ToggleButton value="friday4" aria-label="friday4">
                            19:00 - 19:30
                        </ToggleButton>
                        <ToggleButton value="friday5" aria-label="friday5">
                            19:30 - 20:00
                        </ToggleButton>
                        <ToggleButton value="friday6" aria-label="friday6">
                            20:00 - 20:30
                        </ToggleButton>
                    </StyledToggleButtonGroup>
                </Paper>

            </div>
        </div>
    );
}