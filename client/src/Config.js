/*
    Basic configuration of the overall application. Here
    
    1. Header -> Holds header related config such as Logo URL
    2. DataGrid -> Holds datagrid related config such as 
                        -> Which column will have sorting or filter feature
                        -> Description of each column. This text will eventually appear as tooltip upon hovering the column name
                        -> Set column width
                        -> Set columns which need formatting before display
*/
const configuration = {
    "Header": {
        "logoSrc": "https://platform.ledn.io/b06a01aea649ad9191e5967341e779e1.svg"
    },
    "DataGrid": {
        "sortCol": [
            "amt",
            "createdDate"
        ],
        "colDefinition": {
            "First Name": "Account holder's first name",
            "Last Name": "Account holder's last name",
            "Country": "Country code",
            "email": "Account holder's email",
            "dob": "Date of Birth",
            "mfa": "Multi factor authentication type",
            "amt": "Number of ledn tokens held",
            "createdDate": "Account creation date",
            "ReferredBy": "Email of referral account"
        },
        "filterCol": [
            "First Name",
            "Last Name",
            "Country",
            "mfa"
        ],
        "colWidth": {
            "First Name": 130,
            "Last Name": 130,
            "Country": 110,
            "email": 220,
            "dob": 210,
            "amt": 110,
            "createdDate": 200,
            "ReferredBy": 220
        },
        "formatCol": ['dob', 'createdDate']
    }
};

export function getConfig(configName) {
    return configuration[configName] || null;
};