import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CullPattern extends ResthopperComponent {

	public guid: string = "008e9a6f-478a-4813-8c8a-546273bc3a6b";
	public name: string = "Cull Pattern";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Cull (remove) elements in a list using a repeating bit mask.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}