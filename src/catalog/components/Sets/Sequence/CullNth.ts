import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CullNth extends ResthopperComponent {

	public guid: string = "932b9817-fcc6-4ac3-b5fd-c0e8eeadc53f";
	public name: string = "Cull Nth";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Cull (remove) every Nth element in a list.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}