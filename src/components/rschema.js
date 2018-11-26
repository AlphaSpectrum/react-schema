import React from 'react';
import PropTypes from 'prop-types';

const Schema = ({ schemaType, data }) => {
    let jsonData = JSON.stringify(data, null, '\t');
    jsonData = jsonData.substring(1, jsonData.length - 1);
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: `{\n\t"@context": "http://schema.org/",\n\t"@type": "${schemaType}",\t${jsonData}}` }}
        />
    )
}

Schema.propTypes = {
    schemaType: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired
}

export default Schema;