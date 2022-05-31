process.env.AWS_PROFILE = "Jankov";
import * as AWSF from "./AWS";

async function createAll(){
    await AWSF.createDdb();
    await AWSF.createBucket();
    //await AWSF.createLambda();  NOT IMPLEMENTED YET
}

createAll();

