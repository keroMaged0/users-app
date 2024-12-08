export class ApiFeature {
  constructor(searchQuery, sequelizeModel) {
    this.searchQuery = searchQuery;
    this.sequelizeModel = sequelizeModel;
  }

  // Pagination method
  pagination(pageLimit = 20) {
    let pageNumber = parseInt(this.searchQuery.page) || 1;
    if (pageNumber < 1) pageNumber = 1;

    const skip = (pageNumber - 1) * pageLimit;

    this.sequelizeQuery = this.sequelizeModel.findAndCountAll({
      limit: pageLimit,
      offset: skip,
    });

    return this;
  }
  
}
