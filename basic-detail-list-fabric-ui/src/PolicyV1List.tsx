import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Fabric, DetailsList, IColumn, Selection, SelectionMode } from 'office-ui-fabric-react';

const controlStyles = {
    root: {
      margin: '0 30px 20px 0',
      maxWidth: '300px'
    }
};

interface IPolicy {
    name: string;
    id: number;
}

interface IPolicyV1ListState {
    listItems: IPolicy[];
    columns: IColumn[];
}

class PolicyV1List extends React.Component<{}, IPolicyV1ListState> {
    
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
                <TextField label="Filter by name:" onChange={this._onChangeText} styles={controlStyles} />
                <br/>
                <DetailsList columns = {columns}
                              items = {listItems}
                              selectionMode = {SelectionMode.single}
                              compact={false}
                />
            </Fabric>
        );
    }

    private _onChangeText = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string): void => {
        this.setState({
            listItems: newValue ? this._listItems.filter(i => i.name.toLowerCase().indexOf(newValue) > -1) : this._listItems
        });
      };
}

export default PolicyV1List;

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
                return <div>{item.id}</div>
            }
        }
    ];
    return columns;
}

