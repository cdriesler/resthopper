import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TestCrash extends ResthopperComponent {

	public guid: string = "f3c769fd-aa9b-4695-a1ce-3ad4c53d1440";
	public name: string = "Test Crash";
	public category: string = "Display";
	public subCategory: string = "Test";
	public description: string = "Test crashing of GH";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}