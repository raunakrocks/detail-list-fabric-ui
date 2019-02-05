import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Fabric, DetailsList, IColumn, Selection } from 'office-ui-fabric-react';

interface IPolicy {
    name: string;
    id: number;
}

interface IPolicyListState {
    listItems: IPolicy[];
    columns: IColumn[];
}

class PolicyList extends React.Component<{}, IPolicyListState> {
    
    private _listItems: IPolicy[];

    constructor(props: {}) {
        super(props);
        this._listItems = _generatePolicyItems();
        const columns: IColumn[] = _generateColumns();
        this.state = {
            columns: columns,
            listItems: this._listItems
        }
    }
    
    render(): React.ReactNode {
        const {listItems, columns} = this.state;
        return (
            <Fabric>
                <DetailsList columns = {columns}
                              items = {listItems}
                />
            </Fabric>
        );
    }
}

export default PolicyList;

/* helper methods */

function _generatePolicyItems() {
    const policyItems: IPolicy[] = [];
    for(let i=0; i< 20; i++) {
        const policyName = 'policy' + i;
        policyItems.push({name: policyName, id: i+1});
    }
    return policyItems;       
}

function _generateColumns() {
    const columns: IColumn[] = [
        {
            key: 'policyName',
            name: 'Policy Name',
            minWidth: 70,
            maxWidth: 90,
            onRender: (item: IPolicy) => {
                return <div>{item.name}</div>
            }
        },
        {
            key: 'policyID',
            name: 'Policy ID',
            minWidth: 70,
            maxWidth: 90,
            onRender: (item: IPolicy) => {
                return <div>{item.name}</div>
            }
        }
    ];
    return columns;
}

