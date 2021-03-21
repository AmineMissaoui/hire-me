import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntrepriseService } from '../shared/entreprise.service';

@Component({
  selector: 'app-delete-entreprise',
  templateUrl: './delete-entreprise.component.html',
  styleUrls: ['./delete-entreprise.component.scss']
})
export class DeleteEntrepriseComponent implements OnInit {
  entrepriseId;
  constructor(private route: ActivatedRoute, private _entrepriseService: EntrepriseService, private _router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.entrepriseId = data.id;
      this._entrepriseService.deleteEntreprise(this.entrepriseId).subscribe();
      this._router.navigate(['./entreprise']);
    })

}

}
