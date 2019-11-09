import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Stretch extends ResthopperComponent {

	public guid: string = "2a27f87c-61c5-47c2-a0b7-7863f31a3594";
	public name: string = "Stretch";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Deforms objects by stretching them along a finite axis.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}