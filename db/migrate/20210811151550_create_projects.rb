class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :project_title
      t.text :about
      t.string :github_url
      t.string :deploy_url
      t.references :admin, null: false, foreign_key: true

      t.timestamps
    end
  end
end
