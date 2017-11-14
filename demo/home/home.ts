import { Component } from '@angular/core';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'app',
    styleUrls: ['./home.scss'],
    templateUrl: './home.html'
})
export class Home {
    form: FormGroup;

    constructor(private http: Http) {
        this.form = new FormBuilder().group({
            chips: [['chip'], []]
        });
    }

    disabled = true;

    items2;

    specialists = [
        {
            'orgId': 11932,
            'organisationName': 'Aviator Media Ltd',
            'organisationId': '929E8A51-A70C-DE11-A7EC-000C29D542E5',
            'invoiceStatusCode': 'Aviator Media Ltd'
        },
        {
            'orgId': 11908,
            'organisationName': 'Billups Worldwide',
            'organisationId': '3533A8D0-7335-DE11-9793-000C29D542E5',
            'invoiceStatusCode': 'Billups Worldwide'
        },
        {
            'orgId': 11956,
            'organisationName': 'Crossmedia',
            'organisationId': '6EB54BEA-D577-E011-A1BE-0050569F0890',
            'invoiceStatusCode': 'Crossmedia'
        },
        {
            'orgId': 132809831,
            'organisationName': 'Exterion Media UK Ltd',
            'organisationId': '807e5d3a-f035-e511-aaa3-005056870049',
            'invoiceStatusCode': 'Exterion Media UK Ltd'
        },
        {
            'orgId': 11951,
            'organisationName': 'Hi-Rezz',
            'organisationId': '6B871F32-F664-E011-9039-0050569F0890',
            'invoiceStatusCode': 'Hi-Rezz'
        },
        {
            'orgId': 11949,
            'organisationName': 'JCDecaux Airport China',
            'organisationId': '94856ED9-72EE-DF11-8B4E-0050569F0890',
            'invoiceStatusCode': 'JCDecaux Airport China'
        },
        {
            'orgId': 11920,
            'organisationName': 'JCDecaux Airport France',
            'organisationId': 'E56ED369-94F7-DD11-A1EF-000C29D542E5',
            'invoiceStatusCode': 'JCDecaux Airport France'
        },
        {
            'orgId': 11954,
            'organisationName': 'JCDecaux Airport India',
            'organisationId': '1684E391-425C-E011-9A47-0050569F0890',
            'invoiceStatusCode': 'JCDecaux Airport India'
        },
        {
            'orgId': 5266,
            'organisationName': 'JCDecaux France',
            'organisationId': '83BFC020-137A-E311-94DA-005056870049',
            'invoiceStatusCode': 'JCDecaux France'
        },
        {
            'orgId': 11919,
            'organisationName': 'JCDecaux Group',
            'organisationId': '07BD7E18-94F7-DD11-A1EF-000C29D542E5',
            'invoiceStatusCode': 'JCDecaux Group'
        },
        {
            'orgId': 11921,
            'organisationName': 'JCDecaux North America',
            'organisationId': '00635781-94F7-DD11-A1EF-000C29D542E5',
            'invoiceStatusCode': 'JCDecaux North America'
        },
        {
            'orgId': 11945,
            'organisationName': 'JCDecaux One World',
            'organisationId': '5F743125-E0D4-E211-BAFA-005056870049',
            'invoiceStatusCode': 'JCDecaux One World'
        },
        {
            'orgId': 11943,
            'organisationName': 'Kinetic (Belfast)',
            'organisationId': '9F250B00-C696-E211-A64F-005056870049',
            'invoiceStatusCode': 'Kinetic (Belfast)'
        },
        {
            'orgId': 11914,
            'organisationName': 'Kinetic Worldwide Ltd',
            'organisationId': '6340C59A-CEF6-DD11-A1EF-000C29D542E5',
            'invoiceStatusCode': 'Kinetic Worldwide Ltd'
        },
        {
            'orgId': 11906,
            'organisationName': 'McGread Outdoor Media',
            'organisationId': 'A4B08FA7-195B-DE11-8779-000C29D542E5',
            'invoiceStatusCode': 'McGread Outdoor Media'
        },
        {
            'orgId': 11915,
            'organisationName': 'Meridian Outdoor Advertising Ltd',
            'organisationId': '538E43B6-CFF6-DD11-A1EF-000C29D542E5',
            'invoiceStatusCode': 'Meridian Outdoor Advertising Ltd'
        },
        {
            'orgId': 616072,
            'organisationName': 'Mo House',
            'organisationId': 'D420F444-AC14-E311-B15D-00505687005C',
            'invoiceStatusCode': 'Mo House'
        },
        {
            'orgId': 11926,
            'organisationName': 'OMG Outdoor GMBH',
            'organisationId': '0635FA75-DDF9-DD11-A462-000C29D542E5',
            'invoiceStatusCode': 'OMG Outdoor GMBH'
        },
        {
            'orgId': 11925,
            'organisationName': 'OPR Media',
            'organisationId': '8ECA1724-DDF9-DD11-A462-000C29D542E5',
            'invoiceStatusCode': 'OPR Media'
        },
        {
            'orgId': 11917,
            'organisationName': 'Open Outdoor Ltd',
            'organisationId': '19A257D3-91F7-DD11-A1EF-000C29D542E5',
            'invoiceStatusCode': 'Open Outdoor Ltd'
        },
        {
            'orgId': 11927,
            'organisationName': 'PSI Advertising Ltd',
            'organisationId': 'B868C70E-A9FA-DD11-A462-000C29D542E5',
            'invoiceStatusCode': 'PSI Advertising Ltd'
        },
        {
            'orgId': 29790706,
            'organisationName': 'PSLive',
            'organisationId': '07ff6169-8519-e411-983c-005056870049',
            'invoiceStatusCode': 'PSLive'
        },
        {
            'orgId': 11948,
            'organisationName': 'Pinpoint Out of Home Media Ltd',
            'organisationId': '30047409-FD4D-DF11-8AC3-0050569F0890',
            'invoiceStatusCode': 'Pinpoint Out of Home Media Ltd'
        },
        {
            'orgId': 131790425,
            'organisationName': 'Posterscope Charity',
            'organisationId': '4e9789c0-6c0b-e511-aaa3-005056870049',
            'invoiceStatusCode': 'Posterscope Charity'
        },
        {
            'orgId': 11911,
            'organisationName': 'Posterscope Ltd',
            'organisationId': '89F8CE43-C8F6-DD11-A1EF-000C29D542E5',
            'invoiceStatusCode': 'Posterscope Ltd'
        },
        {
            'orgId': 11923,
            'organisationName': 'Publispazi',
            'organisationId': '11FA0515-6615-DE11-A3AF-000C29D542E5',
            'invoiceStatusCode': 'Publispazi'
        },
        {
            'orgId': 11913,
            'organisationName': 'Rapport Outdoor Ltd',
            'organisationId': '66A1CC49-C8F6-DD11-A1EF-000C29D542E5',
            'invoiceStatusCode': 'Rapport Outdoor Ltd'
        },
        {
            'orgId': 11918,
            'organisationName': 'Source Out of Home Ltd',
            'organisationId': '3E4BE732-92F7-DD11-A1EF-000C29D542E5',
            'invoiceStatusCode': 'Source Out of Home Ltd'
        },
        {
            'orgId': 11940,
            'organisationName': 'Southern Railway Ltd',
            'organisationId': '7A129CEF-0030-E211-91CB-005056870049',
            'invoiceStatusCode': 'Southern Railway Ltd'
        },
        {
            'orgId': 11924,
            'organisationName': 'Talon Outdoor Ltd',
            'organisationId': 'BA5466F1-DAF9-DD11-A462-000C29D542E5',
            'invoiceStatusCode': 'Talon Outdoor Ltd'
        },
        {
            'orgId': 11930,
            'organisationName': 'Walker Outdoor Media',
            'organisationId': '0D1DDBEC-D5FD-DD11-A462-000C29D542E5',
            'invoiceStatusCode': 'Walker Outdoor Media'
        }
    ];

    items = ['Javascript', 'Typescript'];

    inputText = 'text';

    itemsAsObjects = [{ id: 0, name: 'Angular', readonly: true }, { id: 1, name: 'React' }];

    autocompleteItems = ['Item1', 'item2', 'item3'];

    autocompleteItemsAsObjects = [
        { value: 'Item1', id: 0, extra: 0 },
        { value: 'item2', id: 1, extra: 1 },
        'item3'
    ];

    dragAndDropExample = ['C#', 'Java'];

    dragAndDropObjects = [{ display: 'Javascript', value: 'Javascript' }, { display: 'Typescript', value: 'Typescript' }];
    dragAndDropStrings = ['CoffeScript', 'Scala.js'];

    public requestAutocompleteItems = (text: string): Observable<Response> => {
        const url = `https://api.github.com/search/repositories?q=${text}`;
        return this.http
            .get(url)
            .map(data => data.json().items.map(item => item.full_name));
    };

    public requestAutocompleteItemsFake = (text: string): Observable<string[]> => {
        return Observable.of([
            'item1', 'item2', 'item3'
        ]);
    };

    public options = {
        readonly: undefined,
        placeholder: '+ Tag'
    };

    public onAdd(item) {
        console.log('tag added: value is ' + item);
    }

    public onRemove(item) {
        console.log('tag removed: value is ' + item);
    }

    public onSelect(item) {
        console.log('tag selected: value is ' + item);
    }

    public onFocus(item) {
        console.log('input focused: current value is ' + item);
    }

    public onTextChange(text) {
        console.log('text changed: value is ' + text);
    }

    public onBlur(item) {
        console.log('input blurred: current value is ' + item);
    }

    public onTagEdited(item) {
        console.log('tag edited: current value is ' + item);
    }

    public onValidationError(item) {
        console.log('invalid tag ' + item);
    }

    public transform(value: string): Observable<object> {
        const item = { display: `@${value}`, value: `@${value}` };
        return Observable.of(item);
    }

    private startsWithAt(control: FormControl) {
        if (control.value.charAt(0) !== '@') {
            return {
                'startsWithAt@': true
            };
        }

        return null;
    }

    private endsWith$(control: FormControl) {
        if (control.value.charAt(control.value.length - 1) !== '$') {
            return {
                'endsWith$': true
            };
        }

        return null;
    }

    private validateAsync(control: FormControl): Promise<any> {
        return new Promise(resolve => {
            const value = control.value;
            const result: any = isNaN(value) ? {
                isNan: true
            } : null;

            setTimeout(() => {
                resolve(result);
            }, 1);
        });
    }

    public asyncErrorMessages = {
        isNan: 'Please only add numbers'
    };

    public validators = [this.startsWithAt, this.endsWith$];

    public asyncValidators = [this.validateAsync];

    public errorMessages = {
        'startsWithAt@': 'Your items need to start with \'@\'',
        'endsWith$': 'Your items need to end with \'$\''
    };

    public onAdding(tag): Observable<any> {
        const confirm = window.confirm('Do you really want to add this tag?');
        return Observable
            .of(tag)
            .filter(() => confirm);
    }

    public onRemoving(tag): Observable<any> {
        const confirm = window.confirm('Do you really want to remove this tag?');
        return Observable
            .of(tag)
            .filter(() => confirm);
    }

    public asyncOnAdding(tag): Observable<any> {
        const confirm = window.confirm('Do you really want to add this tag?');
        return Observable
            .of(tag)
            .filter(() => confirm);
    }

    removeItem(item) {
        this.items2.splice(item, 1);
    }
}
