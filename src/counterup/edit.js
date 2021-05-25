/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */

import {
	useBlockProps,
    InspectorControls,
	ColorPalette,
	RichText
} from '@wordpress/block-editor';

// import { Panel, PanelBody, PanelRow, SelectControl } = wp.components;
import { __experimentalNumberControl as NumberControl, Panel, PanelBody, PanelRow } from '@wordpress/components';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
const Edit = ( {attributes, setAttributes} ) => {
	const {
		counterContent,
		counterValue
	} = attributes;
	const setCounterContent = ( counterContent ) => {
		setAttributes({ counterContent });
	}
	const setCounterValue = ( counterValue ) => {
		setAttributes({ counterValue });
	}
	return (
		<div { ...useBlockProps() }>
			<InspectorControls key="setting">
				<Panel header="Counter Settings">
					<PanelBody
						initialOpen={ true }
						>
						<p> Counter Up value</p>
						<PanelRow>
							<NumberControl
								value={counterValue}
								onChange={ setCounterValue }
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div className="counter" >
				<span className="countvalue">{ counterValue }</span>
				<RichText
					key='counterContent'
					tagName="p"
					value={ counterContent }
					onChange={ setCounterContent }
				/>
			</div>
		</div>
	);
}

export default Edit;