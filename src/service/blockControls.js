import { Panel, PanelBody, PanelRow , SelectControl } from '@wordpress/components';
import {
    InspectorControls,
	ColorPalette
} from '@wordpress/block-editor';


const blockControls = ( attributes, setAttributes ) => {
    const {
        bgColor
    } = attributes;
    const onbgColorChange = bgColor  => {
        setAttributes({ bgColor });
    }

    return (
        <InspectorControls key="setting">
            <Panel header="" >
                <PanelBody
                    title="Customize BG Color"
                    initialOpen={ true }
                    >
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
};

export default blockControls;



