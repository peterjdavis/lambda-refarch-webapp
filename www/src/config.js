// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "6rgtjljdg19ureio9ub6jrqppa",     // CognitoClientID
  "api_base_url": "https://6ilrybfr1m.execute-api.eu-west-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "coginto_hosted_domain": "mytodoappdemo-lambdawebrefarch.auth.eu-west-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d101dpnysd1p9m.amplifyapp.com"                                      // AmplifyURL
};

export default config;
