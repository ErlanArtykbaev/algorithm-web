import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import MuiToolbar from '@material-ui/core/Toolbar'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'

export const Toolbar = props => (
	<AppBar style={{ backgroundColor: '#111' }}>
		<MuiToolbar>
			<Grid
				container
				alignItems="flex-end"
				spacing={2}
				style={{ marginTop: 8, marginBottom: 8 }}
			>
				<Grid item>
					<FormControl style={{ minWidth: 200 }}>
						<InputLabel htmlFor="algorithm-select">Algorithm</InputLabel>
						<Select
							value={props.algorithm}
							onChange={props.handleAlgorithmChange}
							inputProps={{
								name: 'algorithm-select',
								id: 'algorithm-select',
							}}
						>
							{props.algorithms.map(algorithm => (
								<MenuItem value={algorithm} key={algorithm}>
									{algorithm}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item>
					<FormControl>
						<FormControlLabel
							control={
								<Switch
									checked={props.allowDiagonal}
									onChange={props.handleAllowDiagonalChange}
								/>
							}
							label="Allow Diagonal"
						/>
					</FormControl>
				</Grid>
				<Grid item>
					<FormControl>
						<FormControlLabel
							control={
								<Switch
									checked={props.editMode}
									onChange={props.handleEditModeChange}
								/>
							}
							label="Edit Walkable"
						/>
					</FormControl>
				</Grid>
			</Grid>
		</MuiToolbar>
	</AppBar>
)
