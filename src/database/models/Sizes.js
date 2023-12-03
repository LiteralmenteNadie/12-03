module.exports = (sequelize, DataTypes) => {
    let alias = "Sizes";

    let cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            // AUTO_INCREMENT -> autoIncrement
            autoIncrement: true,
            // PRIMARY KEY -> primaryKey
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(255),
            // NOT NULL -> allowNull
            // allowNull: false
        }
        
    };

    let config = {
        tableName: "sizes",
        timestamps: false, // CREATED_AT UPDATED_AT DELETED_AT
    };

    const Model = sequelize.define(alias, cols, config);

    Model.associate = (models) => {
        Model.belongsToMany(models.Products,{
            as: "Products",
            foreignKey: "size_id",
            otherKey: "product_id",
            through: "products_sizes",
            timestamps: false
        })
    }

    return Model;
}