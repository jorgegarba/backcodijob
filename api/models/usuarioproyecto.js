"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioproyecto_model = (sequelize, type) => {
    return sequelize.define('t_usuarioproyecto', {
        usupro_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        usupro_rol: {
            type: type.STRING(50),
            allowNull: true
        }
    }, {
        timestamps: true,
        tableName: 't_usuarioproyecto'
    });
};
