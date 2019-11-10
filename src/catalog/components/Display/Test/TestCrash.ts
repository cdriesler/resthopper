import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TestCrash extends ResthopperComponent {

	public guid: string = "f3c769fd-aa9b-4695-a1ce-3ad4c53d1440";
	public name: string = "TestCrash";
	public category: string = "Display";
	public subCategory: string = "Test";
	public description: string = "Test crashing of GH";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Crash_C": TestCrashInput_Crash_C,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"Crash_C": new TestCrashInput_Crash_C(),
		}
		this.output = {

		}
	}

}

class TestCrashInput_Crash_C extends ResthopperParameter {

	public name: string = "Crash";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
