import { Panel, PanelBody, PanelRow , SelectControl } from '@wordpress/components';
import { __experimentalBoxControl as BoxControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import {
    InspectorControls,
	ColorPalette
} from '@wordpress/block-editor';


const blockControls = ( attributes, setAttributes ) => {
    const {
        type,
        bgColor
    } = attributes;
    const onChangeType = type => {
        setAttributes({ type });
    }
    const onbgColorChange = bgColor  => {
        setAttributes({ bgColor });
    }

    const [ values, setValues ] = useState( {
        top: '50px',
        left: '10%',
        right: '10%',
        bottom: '50px',
    } );

    return (
        <InspectorControls key="setting">
            <Panel header="" >
                <PanelBody
                    title="Notice Type"
                    initialOpen={ true }
                    >
                    <PanelRow>
                        <BoxControl
                            values={ values }
                            onChange={ ( nextValues ) => setValues( nextValues ) }
                        />
                    </PanelRow>
                    <PanelRow>
                        <SelectControl
                            label="TYPE"
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



