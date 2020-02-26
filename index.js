exports.moody = (e, context) => {
  const pubsubMessage = e.data;

  console.dir(context);
  console.log(pubsubMessage);
};
