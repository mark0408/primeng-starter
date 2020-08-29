import {Component,OnInit} from '@angular/core';
import {NodeService} from '../../../../core/services/nodeservice';
import {TreeNode} from 'primeng/api';

@Component({
    templateUrl: './treetablefilterdemo.html'
})
export class TreeTableFilterDemo implements OnInit {

    files: TreeNode[];

    cols: any[];

    constructor(private nodeService: NodeService) { }

    ngOnInit() {
        this.nodeService.getFilesystem().then(files => this.files = files);

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}