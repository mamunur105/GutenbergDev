import {
    InspectorControls,
	ColorPalette
} from '@wordpress/block-editor';
const { Panel, PanelBody, PanelRow, SelectControl } = wp.components;

function customizeControlPanel( { onChangeType, onbgColorChange} ){
	return(
		<InspectorControls key="setting">
			<Panel header="Notice Settings">
				<PanelBody
					initialOpen={ true }
					>
					<p> Notice Type </p>
					<PanelRow>
						<SelectControl
							label=""
							value={ type }
							options={ [
								{ label: 'Danger', value: 'danger' },
								{ label: 'Success', value: 'success' },
								{ label: 'Info', value: 'info' },
								{ label: 'Warning', value: 'warning' },
							] }
							onChange={ onChangeType }
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody
					initialOpen={ true }
					>
					<p> Customize BG Color </p>
					<PanelRow>
						<ColorPalette
							value={bgColor}
							onChange={ onbgColorChange }
						/>
					</PanelRow>
				</PanelBody>
			</Panel>
		</InspectorControls>
	)
}
export default customizeControlPanel