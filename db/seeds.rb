# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Admin.destroy_all
Comments.destroy_all
Project.destroy_all



admin1 = Admin.create(name: "Ashley", email: "ashley.huynh23@gmail.com", password_digest: "Loki123!")

pp "#{Admin.count} users created"

community_table = Project.create(project_title: "Community Table", about: "A significant problem  with food insecurity and food waste in the United States is that there is insufficient information coordination between food suppliers and community organizations. The goal of Community Table is to provide a centralized location where suppliers (such as grocery stores) can post food data. This will improve the ability of suppliers to coordinate information with community centers to enable food to be allocated more efficiently to communities with the greatest need.", github_url: "https://github.com/robisonJohn/Community-Table", deploy_url: "https://community-table.netlify.app/", admin_id: admin1[:id], image_url: "https://i.imgur.com/hXRJx7J.png", languages:"Javascript | CSS | Mongoose | MongoDB | Express" )

pp "#{Project.count} projects created"


comment1 = Comments.create(name: "Loki", content: "Best fur mom ever!", is_approved: false);

pp "#{Comments.count} comment created"