import AddBasicInformation from "./addBasicInformation";
import AddMainImg from "./addMainImg";
import AddButton from "./addButton";
import AddOption from "./addOption";
import AddSpec from "./addSpec";
import AddVariant from "./addVariant";
import AddDescription from "./addDescription";

export default function AddProductComponents () {

    return (

        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-8">Add New Product</h1>

            <form className="space-y-6">
                
                <div className="flex gap-3">
                    <AddBasicInformation />
                    <AddMainImg />
                </div>
                
                <AddDescription />
                <AddOption />
                <AddSpec />
                <AddVariant />
                <AddButton />
            </form>
        </div>

    );

};
