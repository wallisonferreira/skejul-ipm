-- Criar banco de dados "agenda_tarefas"
CREATE DATABASE IF NOT EXISTS `skejul_ipm_database` DEFAULT CHARACTER SET utf8;
USE `skejul_ipm_database`;

-- Criar tabela `tarefas` com as colunas necessárias
CREATE TABLE IF NOT EXISTS `tasks` (
  `id_task` INT UNSIGNED NOT NULL AUTO_INCREMENT,         -- Identificador único da tarefa
  `title` VARCHAR(100) NOT NULL,                            -- Título da tarefa
  `description` TEXT,                                         -- Descrição da tarefa
  `status` ENUM('pending', 'done') NOT NULL DEFAULT 'pending', -- Status da tarefa
  `start_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, -- Data de criação da tarefa
  `end_date` DATETIME NOT NULL,                            -- Data limite para conclusão da tarefa
  PRIMARY KEY (`id_task`)                                  -- Chave primária para identificação única
) ENGINE = InnoDB;

-- Exemplo de seed para popular o banco com algumas tarefas fictícias
INSERT INTO `tasks` (`title`, `description`, `status`, `end_date`) VALUES
('Fazer a feira', 'Fazer a feira no Angeloni', 'pending', '2025-03-07 10:00:00'),
('Fazer a faxina', 'Fazer a faxina do apartamento', 'pending', '2025-03-09 14:00:00'),
('Entregar a tarefa do IPM', 'Entregar a tarefa do processo seletivo', 'done', '2025-03-04 09:00:00'),
('Levar cachorro ao veterinário', 'Consulta de rotina com o veterinário', 'pending', '2025-03-08 08:00:00');