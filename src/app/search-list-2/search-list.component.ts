import { Component, Input, OnChanges, SimpleChanges, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ContainerService } from "../services/container.service";
import { Ontology } from "../obo/Ontology";
import { TermStanza } from "../obo/TermStanza";

@Component({
  selector: 'app-search-list-2',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './search-list.component.html',
  styleUrl: './search-list.component.css'
})
export class SearchListComponent2 implements OnChanges {
  @Input() category?: TermStanza;
  @Input() name: string = '';

  containerService: ContainerService = inject(ContainerService);
  ontology?: Ontology;
  containers: Map<string, Set<string>> = new Map<string, Set<string>>();

  matchedContainers: Set<string> = new Set<string>();

  constructor() {
    this.containerService.getOntology(false).subscribe((ontology) => {
      this.ontology = ontology;
    });
    this.containerService.getContainersMap().subscribe((containers) => {
      this.containers = containers;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["category"] && !changes["category"].firstChange) {
      this.matchedContainers.clear();
      if (this.category !== undefined) {
        this.getContainersByCategory(this.category);
      }
    }
  }

  getContainersByCategory(category: TermStanza) {
    if (!category.hasChildren()) {
      this.containers.get(category.id)?.forEach((container) => {
        this.matchedContainers.add(container);
      });
    } else {
      category.getChildren().forEach((child) => {
        this.getContainersByCategory(child);
      });
    }
  }

  /* getContainersByName(name: string) {

  } */
}
